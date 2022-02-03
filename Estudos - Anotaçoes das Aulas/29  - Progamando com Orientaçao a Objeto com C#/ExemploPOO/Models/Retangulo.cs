namespace ExemploPOO.Models
{
    public class Retangulo
    {
        private double Comprimento;
        private double Largura;
        private bool Valido;

        public void DefinirMedidads(double comprimento, double largura)
        {

            if (comprimento > 0 && largura > 0)
            {
                this.Comprimento = comprimento;
                this.Largura = largura;
                this.Valido = true;
            }
            else
            {
                System.Console.WriteLine("Valores Invalidos!");
            }
        }

        public double ObterArea()
        {
            if (Valido)
            {
                return Comprimento * Largura;
            }
            else
            {
                System.Console.WriteLine("Prencha valores validos.");
                return 0;
            }
        }
    }
}