"use client";

import React from "react";
import { Box, Grid } from "@mui/material";
import CustomChart from 'src/components/Chart-1/chart_first';
import Header from 'src/components/DashboardHeader/header'
import SessionsByDeviceType from 'src/components/Chart-2/chart_second'
import SalesTable from 'src/components/Chart-3/chart_third'
import CustomerRateChart from 'src/components/Chart-4/chart_forth'
import TopSellingProductsChart from 'src/components/Chart-5/chart_fifth'


const DashboardPage = () => {
    const data = [
        { name: "Nov 2023", firstTime: 2000, returning: 800 },
        { name: "Dec 2023", firstTime: 2500, returning: 1000 },
        { name: "Jan 2024", firstTime: 2200, returning: 1200 },
        { name: "Feb 2024", firstTime: 2400, returning: 1500 },
        { name: "Mar 2024", firstTime: 2600, returning: 1700 },
        { name: "Apr 2024", firstTime: 2800, returning: 1800 },
        { name: "May 2024", firstTime: 3000, returning: 2000 },
      ];
    const data1 = [
        { name: 'Nov 2023', current: 2000000, previous: 1500000 },
        { name: 'Dec 2023', current: 2200000, previous: 1600000 },
        { name: 'Jan 2024', current: 2100000, previous: 1550000 },
        { name: 'Feb 2024', current: 2300000, previous: 1700000 },
        { name: 'Mar 2024', current: 2400000, previous: 1800000 },
        { name: 'Apr 2024', current: 2500000, previous: 1850000 },
        { name: 'May 2024', current: 2600000, previous: 1900000 },
      ];
      const data2 = [
        { name: 'Nov 2023', current: 100000, previous: 50000 },
        { name: 'Dec 2023', current: 220000, previous: 60000 },
        { name: 'Jan 2024', current: 210000, previous: 145000 },
        { name: 'Feb 2024', current: 230000, previous: 130000 },
        { name: 'Mar 2024', current: 240000, previous: 140000 },
        { name: 'Apr 2024', current: 250000, previous:  85000 },
        { name: 'May 2024', current: 260000, previous: 190000 },
      ];
      const data3 = [
        { name: 'Nov 2023', current: 1000, previous: 1500 },
        { name: 'Dec 2023', current: 2200, previous: 1600 },
        { name: 'Jan 2024', current: 2100, previous: 1550 },
        { name: 'Feb 2024', current: 1300, previous: 1700 },
        { name: 'Mar 2024', current: 1400, previous: 1800 },
        { name: 'Apr 2024', current: 1500, previous: 1850 },
        { name: 'May 2024', current: 1600, previous: 1900 },
      ];
      const salesData = [
        { name: "Dani Galvez", amount: "$296,175.14" },
        { name: "Tara Lederman", amount: "$218,918.28" },
        { name: "Janelle Lopez", amount: "$172,489.01" },
        { name: "Bina Njouv-Adams", amount: "$123,688.13" },
        { name: "Jane Kim", amount: "$56,079.03", percentage: 53 },
      ];
      const productData = [
        {
          name: "Custom Ring Sizing",
          current: 489,
          previous: 405,
          percentage: 21,
          isIncrease: true,
        },
        {
          name: "Love Letter Charm Pendant",
          current: 405,
          previous: 257,
          percentage: 58,
          isIncrease: true,
        },
        {
          name: "Dear Kaia Nameplate Necklace",
          current: 307,
        },
        {
          name: "Classic Huggie Earrings",
          current: 290,
        },
        {
          name: "Teardrop Hoop Earrings",
          current: 289,
          previous: 174,
          percentage: 66,
          isIncrease: true,
        },
      ];
  return (
    <Box sx={{ padding: "16px" }} alignItems="stretch">
      <Header />
      <Grid container spacing={2} >
        <Grid item xs={12} md={4}>
          <CustomChart
            header="Total Sales"
            totalAmount="$14,358,452.78"
            increasePercentage={50}
            data={data1}
            dataKeyCurrent="current"
            dataKeyPrevious="previous"
            chartType="line"
          />
        </Grid>
       <Grid item xs={12} md={4}>
            <TopSellingProductsChart
                header="Top selling products"
                products={productData}
            />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomChart
            header="Total orders"
            totalAmount="19,844"
            increasePercentage={30}
            data={data3}
            dataKeyCurrent="current"
            dataKeyPrevious="previous"
            chartType="line"
          />
        </Grid>
        <Grid item xs={12} md={4}>
            <SalesTable
                header="Retail sales by staff at register"
                rows={salesData}
            />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomChart
            header="Total orders"
            totalAmount="19,844"
            increasePercentage={30}
            data={data3}
            dataKeyCurrent="current"
            dataKeyPrevious="previous"
            chartType="line"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomChart
            header="Total orders"
            totalAmount="19,844"
            increasePercentage={30}
            data={data3}
            dataKeyCurrent="current"
            dataKeyPrevious="previous"
            chartType="line"
          />
        </Grid>
        <Grid item xs={12} md={4}>
            <CustomerRateChart
            header="Returning customer rate"
            percentage="12%"
            isIncrease={true}
            data={data}
            colors={{
            firstTime: "#42a5f5", // Blue for "First time"
            returning: "#ab47bc", // Purple for "Returning"
            }}
        />
        </Grid>
        <Grid item xs={12} md={4}>
            <TopSellingProductsChart
                header="Top selling products"
                products={productData}
            />
        </Grid>
        
       
        <Grid item xs={12} md={4}>
          <CustomChart
            header="Total orders"
            totalAmount="19,844"
            increasePercentage={30}
            data={data3}
            dataKeyCurrent="current"
            dataKeyPrevious="previous"
            chartType="line"
          />
        </Grid>
        <Grid item xs={12} md={4}>
            <TopSellingProductsChart
                header="Top selling products"
                products={productData}
            />
        </Grid>
        <Grid item xs={12} md={4}>
            <TopSellingProductsChart
                header="Top selling products"
                products={productData}
            />
        </Grid>
        <Grid item xs={12} md={4} >
            <SessionsByDeviceType />
        </Grid>
        <Grid item xs={12} md={4}>
            <SalesTable
                header="Retail sales by staff at register"
                rows={salesData}
            />
        </Grid>
        <Grid item xs={12} md={4}>
            <SalesTable
                header="Retail sales by staff at register"
                rows={salesData}
            />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomChart
            header="Total orders"
            totalAmount="19,844"
            increasePercentage={30}
            data={data3}
            dataKeyCurrent="current"
            dataKeyPrevious="previous"
            chartType="line"
          />
        </Grid>
       
        <Grid item xs={12} md={4}>
            <TopSellingProductsChart
                header="Top selling products"
                products={productData}
            />
        </Grid>
        <Grid item xs={12} md={4}>
            <SalesTable
                header="Retail sales by staff at register"
                rows={salesData}
            />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
