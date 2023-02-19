using Wallet.Domain;
using Wallet.Application.Interfaces;
using Wallet.Persistence.Interfaces;

namespace Wallet.Application;

public class FlowService : IFlowService
{
    private readonly IFlowPersistence _repository;
    public FlowService(IFlowPersistence repository)
    {
        _repository = repository;
    }

    public async Task<Flow?> AddFlow(Flow flow)
    {
       _repository.Add(flow);

       await _repository.SaveChangesAsync();

       return flow;
    }

    public async Task<bool> DeleteFlow(int id)
    {
        //Verfifica se o fluxo existe no BD
        var flowAlreadyExist = await _repository.GetAsync(id);
        if(flowAlreadyExist != null)
        {
            _repository.Delete(flowAlreadyExist);

            await _repository.SaveChangesAsync();

            return true;
        }

        throw new Exception("Fluxo não encontrado!");
    }

    public async Task<IEnumerable<Flow>?> GetAllFlows()
    {
       return await _repository.GetAsync();
    }

    public async Task<Flow?> GetFlow(int id)
    {
        var flow = await _repository.GetAsync(id);
        if(flow != null) return flow;

        throw new Exception("Fluxo não encontrado!");
    }

    public async Task<Flow> UpdateFlow(Flow flow)
    {
        var flowAlreadyExist = await _repository.GetAsync(flow.Id);

        if(flowAlreadyExist != null)
        {
            _repository.Update(flow);

            await _repository.SaveChangesAsync();
            return flow;
        }

        throw new Exception("Erro ao atualizar o fluxo.");
    }
}
