using Wallet.Domain.Enums;

namespace Wallet.Domain;

public class Item
{
    public int Id { get; set; }
    public int? FlowId { get; set; }
    public Flow? Flow { get; set; }
    public string? Name { get; set; }
    public DateTime Date { get; set; }
    public double Amount { get; set; }
    public StageItem Stage { get; set; }
}
