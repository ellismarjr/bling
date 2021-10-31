import { FiStar, FiGitMerge } from 'react-icons/fi';

import './global.scss';
import './App.scss';
import { useState } from 'react';
import { api } from './services/api';

interface Repo {
  id: string;
  name: string;
  fullname: string;
  owner: number;
  stars: number;
  forks: string;
  avatar_url: string;
}

function App() {
  const [repoToSearch, setRepoToSearch] = useState('');
  const [repoInfos, setRepoInfos] = useState<Repo>();


  async function handleGetRepo() {
    const response = await api.get(`${repoToSearch}`);

    const repo: Repo = {
      id: response.data.id,
      name: response.data.name,
      fullname: response.data.full_name,
      owner: response.data.owner.login,
      stars: response.data.stargazers_count,
      forks: response.data.forks,
      avatar_url: response.data.owner.avatar_url,
    }
    setRepoInfos(repo);
  }

  return (
    <main>
      <h1>Dados do repositório</h1>

      <div className="inputContainer">
        <input type="text" placeholder="Pesquisar pelo repositorio" onChange={(e) => setRepoToSearch(e.target.value)} />
        <button type="button" onClick={handleGetRepo} disabled={repoToSearch === '' ? true : false}>Pesquisar</button>
      </div>

      {repoInfos && (
        <div className="contentWrapper">
          <div className="content">
            <strong>ID:</strong>
            <span>{repoInfos?.id}</span>
          </div>
          <div className="content">
            <strong>Name:</strong>
            <span>{repoInfos?.name}</span>
          </div>
          <div className="content">
            <strong>Fullname:</strong>
            <span>{repoInfos?.fullname}</span>
          </div>
          <div className="content">
            <strong>Owner:</strong>
            <span>
              <img src={repoInfos.avatar_url} alt="" />
              {repoInfos?.owner}
            </span>
          </div>
          <footer>
            <div className="stars">
              <strong>
                {repoInfos?.stars}
              </strong>
              <FiStar size={20} />
            </div>

            <div className="forks">
              <strong>
                {repoInfos?.forks}
              </strong>
              <FiGitMerge size={20} />
            </div>
          </footer>
        </div>
      )}
    </main>
  );
}

export default App;
