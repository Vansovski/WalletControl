using Wallet.Domain;

namespace Wallet.Persistence.Interfaces;

public interface IFlowPersistence : IGeralPersistence
{
    Task<IEnumerable<Flow>?> GetAsync();

    Task<Flow?> GetAsync(int id);
}
