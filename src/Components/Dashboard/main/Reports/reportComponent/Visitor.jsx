import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
const Visitor = () => {
    const[Visit,setVisit] = useState({
          
        series: [70],
        options: {
          chart: {
            height: 116,
            width: 130,
            type: 'radialBar',
            toolbar: {
              show: false
            },
            sparkline:{
                enabled: true
            },
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
               hollow: {
                margin: 0,
                size: '90%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                background: '#fff',
                strokeWidth: '100%',
                margin: '-2px', // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
                }
              },
          
              dataLabels: {
                show: true,
                name: {
                  offsetY: -5,
                  show: true,
                  color: '#888',
                  fontSize: '16px'
                },
                value: {
                    formatter: function(val) {
                        return `${43}K`;
                      },
                  color: '#111',
                  fontSize: '16px',
                  show: true,
                },

              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#28C76F'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: [`Visitor`],
        },
      
      
      })
  return (
    <div className='col-12 mb-3'>
      <div className='card'>
        <div className='d-flex justify-content-between' style={{padding:'24px'}}>
            <div className='d-flex flex-column'>
                <div className='mb-auto'>
                    <h5 class="text-h5 text-no-wrap"> Visitor </h5>
                    <span class="text-sm">Monthly Visitor</span>
                </div>
                <div>
                    <h3 class="text-h3 mb-1"> 43,350 </h3>
                </div>
            </div>
            <div style={{position:"relative"}}>
                <div style={{width:"130px",height:"116px"}}>
                <ReactApexChart options={Visit.options} series={Visit.series} type="radialBar" height={116}/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Visitor
