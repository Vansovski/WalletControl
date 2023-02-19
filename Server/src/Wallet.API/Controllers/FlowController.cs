using Microsoft.AspNetCore.Mvc;
using Wallet.Application.Interfaces;
using Wallet.Domain;

namespace Wallet.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FlowController : ControllerBase
{
    private readonly IFlowService _flowService;
    public FlowController(IFlowService flowService)
    {
        _flowService = flowService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var result = await _flowService.GetAllFlows();
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var result = await _flowService.GetFlow(id);
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Flow flow)
    {
        var result = await _flowService.AddFlow(flow);
        return Ok(result);
    }

    [HttpPut]
    public async Task<IActionResult> Put([FromBody] Flow flow)
    {
        var result = await _flowService.UpdateFlow(flow);
        return Ok(result);
    }

    [HttpDelete]
    public async Task<IActionResult> Del(int id)
    {
        try
        {
            var result = await _flowService.DeleteFlow(id);
            return Ok(result);

        }
        catch (Exception ex)
        {
            return BadRequest($"Erro ao deletar fluxo. {ex.Message}");

        }
    }
}
