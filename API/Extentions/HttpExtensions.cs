using System.Text.Json;
using API.RequestHelpers;

namespace API.Extentions
{
    public static class HttpExtensions
    {
        public static void AddPaginationHeader(this HttpResponse response, MetaData metaData)
        {
            //แปลงชื่อตัวแปรให้เป็นตัวเล็กตำมกฏกำรใช้งำนของ json
            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy =
            JsonNamingPolicy.CamelCase
            };
            response.Headers.Add("Pagination", JsonSerializer.Serialize(metaData, options));
            response.Headers.Add("Access-Control-Expose-Headers", "Pagination");
        }
    }
}