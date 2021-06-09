#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0-alpine AS build
RUN apk add --no-cache nodejs yarn
WORKDIR /src
COPY ["SmartBuilding/SmartBuilding.csproj", "SmartBuilding/"]
RUN dotnet restore "SmartBuilding/SmartBuilding.csproj"
COPY . .
WORKDIR "/src/SmartBuilding"
RUN dotnet build "SmartBuilding.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SmartBuilding.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SmartBuilding.dll"]