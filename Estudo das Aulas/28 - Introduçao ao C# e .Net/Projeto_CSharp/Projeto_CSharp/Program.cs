using System;
using Projeto_CSharp;

namespace CSharp
{

    class Classe
    {
        static void main(string[] args)
        {
            Pessoa person = new Pessoa();
            person.Nome = "Tulio";
            person.Idade = 16;
            person.Estado = "MG";

            Pessoa person2 = new Pessoa();
            person.Nome = "Chico";
            person.Idade = 2;
            person.Estado = "Minas Gerais";
        }

    }
}