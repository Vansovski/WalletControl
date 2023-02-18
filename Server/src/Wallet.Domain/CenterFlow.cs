namespace Wallet.Domain;

public class CenterFlow
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public double PercentOfCenterFlow { get; set; }
    public double TotalAmount { get; set; }

    public IEnumerable<Expense>? Espenses { get; set; }
}
