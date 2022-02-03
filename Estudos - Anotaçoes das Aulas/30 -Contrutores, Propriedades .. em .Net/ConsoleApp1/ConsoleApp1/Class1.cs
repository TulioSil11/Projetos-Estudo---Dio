using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
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


