namespace Wallet.Domain;

public class ItemExpense
{
    public int ExpenseId { get; set; }
    public Expense? Expense { get; set; }

    public int ItemId { get; set; }
    public Item? Item { get; set; }
}
