namespace Wallet.Domain;

public class FlowConnection
{
    public int InFlowId { get; set; }
    public Flow? InFlow { get; set; }

    public int OutFlowId { get; set; }
    public Flow? InutFlow { get; set; }

    public double PercentOfFlow { get; set; }
    public double TotalAmountInsideFlow { get; set; }
}
