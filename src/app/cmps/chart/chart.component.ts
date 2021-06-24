import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
 
  @Input() chartData: any
  @Input() chartTitle: any
  
  chartWidth = 800
  chartHeight = 400
  chart : any

  
  constructor() { }


  createGoogleChart() {
    return {
      title: this.chartTitle,
      type: ChartType.AreaChart,
      data: this.chartData,
      options: {
        colors: ['#f2931b'],
        backgroundColor: {
          fill: '#121212'
        },
        vAxis: {
          baselineColor: '#2a2a2a',
          gridlineColor: '#2a2a2a',
          textColor: '#fff'

        },
        xAxis: {
          baselineColor: 'transparent',
          gridlineColor: 'transparent',
        },
        hAxis: {
          baselineColor: 'transparent',
          gridlineColor: 'transparent',
          textColor: '#fff'
        },
        titleTextStyle: {
          color: '#fff',
          fontSize: 16
        },
        animation: {
          duration: 250,
          easing: 'ease-in',
          startup: true
        }
      },
    }
  }


    // moving to chart cmp
  resizeChart() {
    if (window.innerWidth <= 670) {
      // this.chartWidth = 350
      // this.chartHeight = 200    
      this.chartWidth = 300
      this.chartHeight = 250
      // this.chart = this.createGoogleChart()
    } else {
      // this.chartWidth = 800
      // this.chartHeight = 400
      this.chartWidth = 800
      this.chartHeight = 400
    }
  }

  ngOnInit(): void {
    this.resizeChart() 
    this.chart = this.createGoogleChart()
    window.addEventListener('resize', () => {
       this.resizeChart()
    })
  }

  ngOnDestroy() {
    window.removeEventListener('resize', () => {
      this.resizeChart()
   })
  }

}
