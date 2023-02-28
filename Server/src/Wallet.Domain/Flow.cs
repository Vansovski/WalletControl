using Wallet.Domain.Enums;

namespace Wallet.Domain;

public class Flow
{
    public int Id { get; set; }
    public int? ParentFlowId { get; set; }
    public Flow? ParentFlow { get; set; }
    public string? Name { get; set; }
    public KindFlow Kind { get; set; }
    public bool Active { get; set; }
    public string? Description { get; set; }
    public IEnumerable<FlowConnection>? Connections { get; set; }
    public IEnumerable<Flow>? Flows { get; set; }
    public IEnumerable<Item>? Items { get; set; }
}
