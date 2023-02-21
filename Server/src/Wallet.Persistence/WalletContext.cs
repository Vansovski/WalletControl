using Microsoft.EntityFrameworkCore;
using Wallet.Domain;

namespace Wallet.Persistence;

public class WalletContext : DbContext
{
    public WalletContext(DbContextOptions<WalletContext> options) : base(options)
    {

    }
    public DbSet<Flow>? Flows { get; set; }
    public DbSet<FlowCenter>? FlowCenters { get; set; }
    public DbSet<Expense>? Expenses { get; set; }
    public DbSet<Item>? Items { get; set; }
    public DbSet<ExpenseItem>? ExpenseItems { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ExpenseItem>()
            .HasKey(expenseItem => new { expenseItem.ExpenseId, expenseItem.ItemId });

        base.OnModelCreating(modelBuilder);
    }
}
