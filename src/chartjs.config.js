import {
  Chart,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(RadialLinearScale, ArcElement, Tooltip, Legend);

Chart.defaults.font.family = 'Inter';
Chart.defaults.maintainAspectRatio = false;
Chart.defaults.responsive = true;
Chart.defaults.scale.ticks.color = '#718EBF';
Chart.defaults.scale.grid.color = '#F3F3F5';
Chart.defaults.scale.border.display = false;
