namespace Wallet.Domain;

public class ExpenseItem
{
    public int ExpenseId { get; set; }
    public Expense? Expense { get; set; }

    public int ItemId { get; set; }
    public Item? Item { get; set; }
}
