using System;
using Colecoes.Helper;

namespace Colecoes
{
    class Colecoes
    {
        static void Main(string[] args)
        {
            //Array de uma dimensao
            // int[] arrayInteiros = new int[3];
            // arrayInteiros[0] = 2;
            // arrayInteiros[1] = 10;
            // arrayInteiros[2] = 20;

            // System.Console.WriteLine("Pecorrendo array pelo for:");

            // for (int i = 0; i < arrayInteiros.Length; i++)
            // {
            //     System.Console.WriteLine(arrayInteiros[i]);
            // }

            // System.Console.WriteLine("Pecorrendo array pelo foreach:");

            // foreach (var item in arrayInteiros)
            // {
            //     System.Console.WriteLine(item);
            // }

            //Array Multidimensional
            // int[,] Matriz = new int[3, 4]
            // {
            //     {10,20,30,40},
            //     {30,40,70,80},
            //     {25,50,45,15}
            // };

            //Ordenando via Bubble Sort
            operacoesArray op = new operacoesArray();

            int[] array = new int[5]
            {
                 5,3,2,4,1
            };

            // System.Console.WriteLine("Array original:");
            // op.imprimirArray(array);

            // System.Console.WriteLine("Array ordenado:");
            // op.ordenarBubbleSort(ref array);
            // op.imprimirArray(array);

            //Ordenando com a Classe Array

            op.Ordenar(ref array);
            op.imprimirArray(array);

        }
    }
}
