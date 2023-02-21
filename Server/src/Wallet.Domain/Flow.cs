using Wallet.Domain.Enums;

namespace Wallet.Domain;

public class Flow
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public KindFlow Kind { get; set; }
    public bool Active { get; set; }

    public IEnumerable<FlowCenter>? Centers { get; set; }
}
