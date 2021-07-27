using System.Collections.Generic;
using Domain.Interfaces.Repositorys;

namespace Domain.Services
{
    public class ServiceBase<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        private readonly IBaseRepository<TEntity> _baseRepository;
        public ServiceBase(IBaseRepository<TEntity> baseRepository) => _baseRepository = baseRepository;

        public virtual void Add(TEntity entity) => _baseRepository.Add(entity);

        public virtual IEnumerable<TEntity> GetAll() => _baseRepository.GetAll();
        
        public virtual TEntity GetById(int id) => _baseRepository.GetById(id);

        public virtual void Update(TEntity entity) => _baseRepository.Update(entity);

        public virtual void Remove(TEntity entity) => _baseRepository.Remove(entity);
    }
}