import React from 'react';
import RepositoryCard from './RepositoryCard';

const repositories = [
  {
    name: "Repo 1",
    description: "This is the description for repo 1",
    image: ""
  },
  {
    name: "Repo 2",
    description: "This is the description for repo 2",
     image: ""
  },
  {
    name: "Repo 3",
    description: "This is the description for repo 3",
     image: ""
  }
];

const RepositoryList = () => {
  return (
    <div className="repository-list">
      {repositories.map(repo => (
        <RepositoryCard key={repo.name} repo={repo} />
      ))}
    </div>
  );
}

export default RepositoryList;
