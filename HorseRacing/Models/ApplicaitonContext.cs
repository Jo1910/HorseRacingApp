namespace HorseRacing.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;

    public partial class ApplicationContext : DbContext
    {
        public ApplicationContext()
            : base("name=ApplicationContext")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }

        public virtual DbSet<Acquisition> Acquisitions { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Colour> Colours { get; set; }
        public virtual DbSet<Country> Countries { get; set; }
        public virtual DbSet<Gender> Genders { get; set; }
        public virtual DbSet<Horse> Horses { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Horse>()
                .HasOptional(h => h.Dam)
                .WithMany()
                .HasForeignKey(d => d.DamId);

            modelBuilder.Entity<Horse>()
                .HasOptional(h => h.Sire)
                .WithMany()
                .HasForeignKey(s => s.SireId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
