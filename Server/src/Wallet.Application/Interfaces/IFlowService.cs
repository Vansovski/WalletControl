using Wallet.Domain;

namespace Wallet.Application.Interfaces;

public interface IFlowService
{
    Task<Flow?> AddFlow(Flow flow); 
    Task<IEnumerable<Flow>?> GetAllFlows();
    Task<Flow?> GetFlow(int id);
    Task<Flow> UpdateFlow(Flow flow);
    Task<bool> DeleteFlow(int id);
}
