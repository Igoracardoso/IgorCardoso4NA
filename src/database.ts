import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://igor4na_user:CFxrNdbXP7f1E6ltozlGLXBE7fa3WLyb@dpg-cr7qs2d6l47c73bq69og-a.oregon-postgres.render.com/igor4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;