import React from 'react';

const RepositoryCard = ({ repo }) => {
  return (
    <div className="repository-card">
      <img src={repo.image} alt={repo.name} />
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
    </div>
  );
}

export default RepositoryCard;
