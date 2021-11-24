import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import brasilApi from '../services/brasilApi';

export default class BrasilApi extends Component {
  constructor() {
    super();
    this.state = {
      endereco: {},
    };
  }

  handleSubmit = async ({ cep }) => {
    try {
      const response = await brasilApi.get(`${cep}`);
      this.setState({ endereco: response.data });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Tente novamente',
        text: `CEP ${cep} não encontrado.`,
      });
    }
  };

  render() {
    return (
      <>
        <main className="d-flex justify-content-center">
          <div>
          <Link to='/viacep' className="mb-2">Ir para ViaCEP</Link> 
            <h2>Brasil API</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field
                  placeholder='Insira CEP'
                  required
                  type='text'
                  name='cep'
                  id='cep'
                />
                <button type='submit'>Pesquisar</button>
              </Form>
            </Formik>
            {!!this.state.endereco.cep && (
              <ul>
                <li>{this.state.endereco.cep}</li>
                <li>Rua: {this.state.endereco.street}</li>
                <li>Bairro: {this.state.endereco.neighborhood}</li>
                <li>Cidade: {this.state.endereco.city}</li>
                <li>Estado: {this.state.endereco.state}</li>
              </ul>
            )}
          </div>
        </main>
      </>
    );
  }
}
