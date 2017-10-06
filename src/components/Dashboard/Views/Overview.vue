<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-lg-4 col-sm-6" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row">

      <div class="col-xs-12">
        <chart-card :chart-data="usersChart.data" :chart-options="usersChart.options">
          <h4 class="title" slot="title">Acessos no perfil</h4>
          <span slot="subTitle"> nas últimas 24 horas</span>
          <span slot="footer">
            <i class="ti-reload"></i> Atualizado a 3 minutos</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Site
            <i class="fa fa-circle text-warning"></i> Região
            <i class="fa fa-circle text-danger"></i> Seu perfil
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-xs-12">
        <chart-card :chart-data="preferencesChart.data"  chart-type="Pie">
          <h4 class="title" slot="title">Acessos ao perfil</h4>
          <span slot="subTitle"> Comparativo de acessos referentes ao seu perfil</span>
          <span slot="footer">
            <i class="ti-timer"></i> No último mês</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Site
            <i class="fa fa-circle text-warning"></i> Região
            <i class="fa fa-circle text-danger"></i> Perfil
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-xs-12">
        <chart-card :chart-data="activityChart.data" :chart-options="activityChart.options">
          <h4 class="title" slot="title">Acessos</h4>
          <span slot="subTitle"> Acessos Premium vs. Acessos Públicos</span>
          <span slot="footer">
            <i class="ti-check"></i> Com base no ano atual</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Premium
            <i class="fa fa-circle text-warning"></i> Públicos
          </div>
        </chart-card>
      </div>

    </div>

  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  export default {
    components: {
      StatsCard,
      ChartCard
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        statsCards: [
          {
            type: 'success',
            icon: 'ti-wallet',
            title: 'Premium',
            value: 'R$1345',
            footerText: 'Acumulados',
            footerIcon: 'ti-calendar'
          },
          {
            type: 'danger',
            icon: 'ti-gallery',
            title: 'Visualizações',
            value: '123',
            footerText: 'Desde o primeiro acesso',
            footerIcon: 'ti-timer'
          },
          {
            type: 'info',
            icon: 'ti-thumb-up',
            title: 'Curtidas',
            value: '45',
            footerText: 'Desde o primeiro acesso',
            footerIcon: 'ti-timer'
          }
        ],
        usersChart: {
          data: {
            labels: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00', '3:00', '6:00'],
            series: [
              [287, 385, 490, 562, 594, 626, 698, 895, 952],
              [67, 152, 193, 240, 387, 435, 535, 642, 744],
              [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
          },
          options: {
            low: 0,
            high: 1000,
            showArea: true,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: this.$Chartist.Interpolation.simple({
              divisor: 3
            }),
            showLine: true,
            showPoint: false
          }
        },
        activityChart: {
          data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        },
        preferencesChart: {
          data: {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
          },
          options: {}
        }

      }
    }
  }

</script>
<style>

</style>
