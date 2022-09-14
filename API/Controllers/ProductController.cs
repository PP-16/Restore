using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : BaseApiController
    {
        private readonly StoreContext _context;
        public ProductController(StoreContext context)
        {
            _context = context;
            
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetPeoduct()
        {
            return await _context.Products.ToListAsync();
        }
        // [HttpGet("[action]")]
        // public async Task<IActionResult> TestGetPeoduct()
        // {
        //     return Ok(await _context.Products.ToListAsync());

        // }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
        

            return await _context.Products.FindAsync(id);

        }
    }
}