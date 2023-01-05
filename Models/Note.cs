using System;
using System.Collections.Generic;

namespace NotesApp.Models
{
    public partial class Note
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = null!;
        public string Message { get; set; } = null!;
        public DateTime Datetime { get; set; }
    }
}
