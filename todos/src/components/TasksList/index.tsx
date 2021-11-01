import { FiTrash2 } from 'react-icons/fi';

import './styles.scss';

export function TasksList() {
  return (
    <section className="task-list">

      <main>
        <header>
          Lista De Tarefas
        </header>
        {/* <table>
          <thead>
            <tr>
              <th colSpan={2}></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="">
                  <input type="checkbox"
                    readOnly
                    checked
                  />
                </label>
                <p>Fazer testes bling</p>
              </td>
              <td>
                <button type="button">
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">
                  <input type="checkbox"
                    readOnly
                    checked
                  />
                </label>
                <p>Fazer testes bling</p>
              </td>
              <td>
                <button type="button">
                </button>
              </td>
            </tr>
          </tbody>
        </table> */}
        <ul>
          <li>
            <div>
              <label htmlFor="">
                <input type="checkbox"
                  readOnly
                  checked
                />
              </label>
              <p>Fazer testes bling</p>
            </div>
            <button className="deleteButton">
              <FiTrash2 size={20} color="#ad273f"/>
            </button>
          </li>
          <li>
            <div>
              <label htmlFor="">
                <input type="checkbox"
                  readOnly
                  checked
                />
              </label>
              <p>Fazer testes bling</p>
            </div>
            <button className="deleteButton">
              <FiTrash2 size={20} color="#ad273f"/>
            </button>
          </li>
        </ul>
      </main>
    </section>
  );
}