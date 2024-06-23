import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constants';
import { Line, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const DashboardPage = () => {
    const [data, setData] = useState({
      monthlyIncome: 0,
      totalIncome: 0,
      completedOrders: 0,
      ongoingOrders: 0,
      monthlyIncomeData: [],
      ongoingOrderStatusData: { verification: 0, process: 0, readyToPick: 0 },
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/orders`);
        const orders = response.data;
        
        // pendapatan bulanan
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();

        const monthlyIncome = orders
          .filter(order => {
            const [day, month, year] = order.order_date.split('-');
            return parseInt(month, 10) === currentMonth && parseInt(year, 10) === currentYear;
          })
          .reduce((sum, order) => sum + order.total_price, 0);
        
        // pendapatan total
        const totalIncome = orders.reduce((sum, order) => sum + order.total_price, 0);
        
        // pesanan selesai
        const completedOrders = orders.filter(order => order.status === 'Selesai').length;
        
        // pesanan berjalan
        const ongoingOrders = orders.filter(order => order.status !== 'Selesai').length;

        // pendapatan bulanan tahun ini
        const monthlyIncomeData = Array(12).fill(0);
        orders.forEach(order => {
          const [day, month, year] = order.order_date.split('-');
          if (parseInt(year, 10) === currentYear) {
            monthlyIncomeData[parseInt(month, 10) - 1] += order.total_price;
          }
        });
        
        // Menghitung status pesanan berjalan
        const ongoingOrderStatusData = { verification: 0, process: 0, readyToPick: 0 };
        orders.forEach(order => {
          if (order.status === 'Verifikasi') ongoingOrderStatusData.verification++;
          if (order.status === 'Proses') ongoingOrderStatusData.process++;
          if (order.status === 'Siap Ambil') ongoingOrderStatusData.readyToPick++;
        });

        setData({
            monthlyIncome,
            totalIncome,
            completedOrders,
            ongoingOrders,
            monthlyIncomeData,
            ongoingOrderStatusData,
          });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const lineChartData = {
    labels: [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'
    ],
    datasets: [
      {
        label: 'Pendapatan Bulanan',
        data: data.monthlyIncomeData,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Verifikasi', 'Proses', 'Siap Ambil'],
    datasets: [
      {
        label: 'Status Pesanan Berjalan',
        data: [
          data.ongoingOrderStatusData.verification,
          data.ongoingOrderStatusData.process,
          data.ongoingOrderStatusData.readyToPick
        ],
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
      },
    ],
  };

  return (
    <div className="pt-5 px-5 pb-0">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="mb-0">Dashboard Laundry Resik</h2>
      </div>
      
      <div className="w-100 d-flex justify-content-between align-items-center mb-4">
        <div className='shadow-sm bg-white rounded py-4 px-3 d-flex justify-content-between align-items-center' style={{width:'23%',borderLeft:'10px solid #0d6efd'}}>
          <div>
            <h6 className='text-primary'>Pendapatan Bulanan</h6>
            <h3 className='mb-0'><span style={{fontSize:'18px'}}>RP</span>.{data.monthlyIncome.toLocaleString('id-ID')}</h3>
          </div>
          <i className="bi-calendar-fill" style={{fontSize:'38px',color:'#dddddd'}}></i>
        </div>
        <div className='shadow-sm bg-white rounded py-4 px-3 d-flex justify-content-between align-items-center' style={{width:'23%',borderLeft:'10px solid #00c711'}}>
          <div>
            <h6 style={{color:'#00c711'}}>Total Pendapatan</h6>
            <h3 className='mb-0'><span style={{fontSize:'18px'}}>RP</span>.{data.totalIncome.toLocaleString('id-ID')}</h3>
          </div>
          <i className="bi-currency-dollar" style={{fontSize:'38px',color:'#dddddd'}}></i>
        </div>
        <div className='shadow-sm bg-white rounded py-4 px-3 d-flex justify-content-between align-items-center' style={{width:'23%',borderLeft:'10px solid #00c7c0'}}>
          <div>
            <h6 style={{color:'#00c7c0'}}>Pesanan Selesai</h6>
            <h3 className='mb-0'>{data.completedOrders}</h3>
          </div>
          <i className="bi-check2-circle" style={{fontSize:'38px',color:'#dddddd'}}></i>
        </div>
        <div className='shadow-sm bg-white rounded py-4 px-3 d-flex justify-content-between align-items-center' style={{width:'23%',borderLeft:'10px solid #e9d900'}}>
          <div>
            <h6 style={{color:'#e9d900'}}>Pesanan Berjalan</h6>
            <h3 className='mb-0'>{data.ongoingOrders}</h3>
          </div>
          <i className="bi-list-task" style={{fontSize:'38px',color:'#dddddd'}}></i>
        </div>
      </div>

      <div className="w-100 d-flex justify-content-between align-items-center">
        <div className='pt-2 px-3 bg-white rounded shadow-sm' style={{width: '64%',height:'calc(100vh - 375px)'}}>
          <h4>Pendapatan Tahun Ini</h4>
          <Line data={lineChartData} />
        </div>
        <div className='pt-2 px-3 bg-white rounded shadow-sm' style={{width: '33%',height:'calc(100vh - 375px)'}}>
          <h4>Pesanan Berjalan</h4>
          <Doughnut data={doughnutChartData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
