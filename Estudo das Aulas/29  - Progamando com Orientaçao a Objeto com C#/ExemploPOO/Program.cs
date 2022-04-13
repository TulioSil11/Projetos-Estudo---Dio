using System;
using ExemploPOO.Models;


namespace ExemploPOO
{

    class Program
    {
        static void Main(string[] args)
        {


            Corrente c = new Corrente();
            c.Creditar(300);

            c.ExibirSaldo();


            // Aluno a1 = new Aluno();
            // a1.Nome = "Chico";
            // a1.Idade = 2;
            // a1 = 10;

            // a1.Apresentar();


            // Retangulo r = new Retangulo();
            // r.DefinirMedidads(30, 30);

            // System.Console.WriteLine($"Area:{r.ObterArea()}");


            // Pessoa p1 = new Pessoa();
            // p1.Nome = "Tulio";
            // p1.Idade = 17;

            // p1.Apresentar();
        }
    }
}