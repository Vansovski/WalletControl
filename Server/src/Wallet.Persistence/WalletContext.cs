using Microsoft.EntityFrameworkCore;
using Wallet.Domain;

namespace Wallet.Persistence;

public class WalletContext : DbContext
{
    public WalletContext(DbContextOptions<WalletContext> options) : base(options)
    {

    }
    public DbSet<Flow>? Flows { get; set; }
    public DbSet<FlowConnection>? FlowConnections { get; set; }
    public DbSet<Item>? Items { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<FlowConnection>()
            .HasKey(connection => new { connection.InFlow, connection.OutFlowId });

        modelBuilder.Entity<Flow>()
       .HasMany(flow => flow.Flows)
       .WithOne(flow => flow.ParentFlow);

        base.OnModelCreating(modelBuilder);
    }
}
