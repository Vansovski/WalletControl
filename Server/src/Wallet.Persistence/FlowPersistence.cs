using Microsoft.EntityFrameworkCore;
using Wallet.Domain;
using Wallet.Persistence.Interfaces;

namespace Wallet.Persistence;

public class FlowPersistence : GeralPersistence, IFlowPersistence
{
    public FlowPersistence(WalletContext context) : base(context)
    {

    }

    public async Task<IEnumerable<Flow>?> GetAsync()
    {
        IQueryable<Flow>? query = _context.Flows;

        if (query != null) return await query.ToArrayAsync();

        return null;
    }

    public async Task<Flow?> GetAsync(int id)
    {
        IQueryable<Flow>? query = _context.Flows;

        if (query != null) return await query.FirstOrDefaultAsync(flow => flow.Id == id);

        return null;
    }
}
