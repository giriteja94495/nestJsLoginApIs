module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456789',
  database: 'project',
  entities: ['dist/**/*.entity{.ts,.js}'],
  // ... other configuration options
};
