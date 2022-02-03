using System;

namespace ExemploDeConstrutores.Models
{
	public class Pessoa
	{
		private string Nome;
		private string SobreNome;

		public Pessoa()
        {
			Nome = string.Empty;
			SobreNome = string.Empty;
        }

		public Pessoa(string Nome, string SobreNome)
        {
			this.Nome = Nome;
			this.SobreNome = SobreNome;
        }

		public void Apresentar()
        {
			System.Console.WriteLine($"Ola eu sou o {Nome} {SobreNome}");
        }
	}
}