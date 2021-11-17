const config = {
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'project_m9',
    dialect: 'mysql',
    pool: {
        min: 0,
        mex: 5,
        idle: 10000,
        acquire: 30000
    }
};

export default config;