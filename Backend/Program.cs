var builder = WebApplication.CreateBuilder(args);

//Desired policy name
var corsPolicy = "_myCorsPolicty";
//Create CORS policy
builder.Services.AddCors(options => options.AddPolicy(name: corsPolicy,

    policy =>
    {
        policy.WithOrigins("https://weather-app-ib.netlify.app");
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();

    }


));

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddAuthorization();
builder.Services.AddAuthentication();
builder.Services.AddHttpClient();

var app = builder.Build();

//Inorder to store secret api keys
//Run CMD(dotnet user-secrets init)
//Run CMD(dotnet user-secrets set "keyfindername:Key" "keyname")
var openWeatherKey = builder.Configuration["OpenWeather:Key"];



app.UseHttpsRedirection();
app.UseRouting();

//Attach CORS policy
app.UseCors(corsPolicy);

//Auther and Authon
app.UseAuthentication();
app.UseAuthorization();

app.MapGet("/test", () => new { message = "Testing" });

app.MapGet("/weather/{city}", async (string city, IHttpClientFactory httpClientFactory) =>
{

    if (openWeatherKey == null)
    {
        Console.WriteLine("Did not find api key");
        return Results.NotFound();
    }
    else
    {
        Console.WriteLine(city);
        var url = $"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={openWeatherKey}&units=metric";

        var client = httpClientFactory.CreateClient();

        try
        {
            var response = await client.GetFromJsonAsync<object>(url);
            return Results.Ok(response);
        }
        catch
        {
            Console.WriteLine("Could not find provided city name");
            return Results.NotFound();
        }


    }

});

app.MapGet("/forecast/{city}", async (string city, IHttpClientFactory httpClientFactory) =>
{

    if (openWeatherKey == null)
    {
        Console.WriteLine("Did not find api key");
        return Results.NotFound();
    }
    else
    {
        Console.WriteLine(city);
        var url = $"https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={openWeatherKey}&units=metric";

        var client = httpClientFactory.CreateClient();

        try
        {
            var response = await client.GetFromJsonAsync<object>(url);
            return Results.Ok(response);
        }
        catch
        {
            Console.WriteLine("Could not find provided city name");
            return Results.NotFound();
        }


    }

});

//Ussually running on port 5121
app.Run();
