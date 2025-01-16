export default function clg(...args: any[]) {
  if (process.env.NODE_ENV === 'development') {
    console.log(...args);
  }
}
