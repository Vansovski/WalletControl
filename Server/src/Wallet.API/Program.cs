using Microsoft.EntityFrameworkCore;
using Wallet.Application;
using Wallet.Application.Interfaces;
using Wallet.Persistence;
using Wallet.Persistence.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
                .AddNewtonsoftJson(x => x.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore 
                );
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<WalletContext>(
    context => context.UseSqlite(builder.Configuration.GetConnectionString("Default"))
);


//Injeção de Dependencia
builder.Services.AddScoped<IFlowService, FlowService>();
builder.Services.AddScoped<IGeralPersistence, GeralPersistence>();
builder.Services.AddScoped<IFlowPersistence, FlowPersistence>();

builder.Services.AddCors();

var app = builder.Build();

app.UseCors(access => access.AllowAnyHeader()
                            .AllowAnyMethod()
                            .AllowAnyOrigin()
);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
