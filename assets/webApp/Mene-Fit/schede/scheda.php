<?php
    //classi
    class Esercizio{
        public $nome;
        public $durata;
        public $serie;
        public $ripetizioni;
        public $ripresa;
    }

    class Scheda {
        public $id;
        public $nome;
        public $esercizi = [];
    }

    class Options {
        public $schede = [];
    }
    //fine classi

    $mysql_hostname = "sql210.unaux.com";
    $mysql_user = "unaux_29969354";
    $mysql_password = "e9sz3k6mr";
    $mysql_database = "unaux_29969354_MeneFit";
    $db = mysqli_connect($mysql_hostname, $mysql_user, $mysql_password, $mysql_database);
    $es;
    $scheda;
    $scheda_;
    $sql;
    if(!$db)
        echo(mysqli_connect_error());
    else{
        if(isset($_GET["scheda"]) && !empty($_GET["scheda"])){
            if($_GET["scheda"]=="all")
            {
                $sql = "SELECT * FROM scheda";
                $sc = $db->query($sql);
                $db->close();
                $tmp = new Options();
                while($fetchEs = $sc->fetch_assoc())
                {
                    $tmp = new Scheda();
                    $tmp->id = $fetchEs["idscheda"];
                    $tmp->nome = $fetchEs["nome"];
                    $scheda_->schede[] = $tmp;
                }
            }else{
                //$sql = "SELECT * FROM scheda AND WHERE idScheda = ".$_GET["scheda"];
                $sql = "SELECT * FROM esercizio WHERE esercizio.idscheda = ".$_GET["scheda"];
                $es = $db->query($sql);
                $sql = "SELECT * FROM scheda WHERE idscheda = ".$_GET["scheda"];
                $scheda = $db->query($sql);
                $db->close();

                $scheda_ = new Scheda();
                $scheda_->nome = $scheda->fetch_assoc()["nome"];
                $scheda_->id = $_GET["scheda"];

                while($fetchEs = $es->fetch_assoc()){
                    $tmp = new Esercizio();
                    $tmp->nome = $fetchEs["nome"];
                    $tmp->durata = $fetchEs["durata"];
                    $tmp->serie = $fetchEs["serie"];
                    $tmp->ripetizioni = $fetchEs["ripetizioni"];
                    $tmp->ripresa = $fetchEs["ripresa"];
                    $scheda_->esercizi[] = $tmp;
                }
            }

            echo(json_encode($scheda_));
        }
        else
            echo "ERROR";
    }
?>