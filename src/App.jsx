import {
  useQuery
} from 'react-query';
import './App.css';

async function fetchFacturas() {
  const response = await fetch('http://localhost:5555/customers/AROUT');
  return await response.json();
}

function App() {
  const { isLoading, isError, data, error } = useQuery('facturas', fetchFacturas)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className= 'container'>
      <h3>Cliente</h3>

      <table className="table">
        <thead>
          <tr>
            <th>nombre</th>
            <th>id</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.cliente.customer_id}</td>
            <td>{data.cliente.company_name}</td>
            <td>{data.cliente.city}</td>
          </tr>
        </tbody>
      </table>

      <h3>Facturas</h3>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>fecha</th>
          </tr>
        </thead>
        <tbody>
          {data.facturas.map(factura => (
            <tr key={factura.order_id}>
              <td>{factura.order_id}</td>
              <td>{factura.order_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
