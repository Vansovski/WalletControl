using Microsoft.AspNetCore.Mvc;

namespace Wallet.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FlowController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Hello World");
    }
}
