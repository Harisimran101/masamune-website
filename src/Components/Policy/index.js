import React from "react";
import styles from "./style.module.scss";

const policy = (props) => {
  return (
    <div className={`container ${styles.mainDiv}`}>
      <div className="row mx-0">
        <div className="col-lg-12">
          <div className={styles.textHeading}>
            <h1>Privacy Policy</h1>
          </div>
        </div>
        <div className={`col-lg-6 ${styles.firstText}`}>
          <p>
            Questo Sito Web raccoglie alcuni Dati Personali dei propri Utenti.
          </p>
          <p>Titolare del Trattamento dei Dati</p>
          <p>
            Anfutravel s.r.l. – Via Anfuso, 2– 95126 Catania, Italia – P.IVA:
            05310200877
          </p>
          <p>Indirizzo email: amministrazione@masamune.it</p>
        </div>
        <div className="col-lg-12">
          <div className={styles.midHeading}>
            <h1>Tipologie di Dati raccolti</h1>
          </div>
        </div>
        <div className="col-lg-12">
          <div className={styles.lastText}>
            <p>
              Fra i Dati Personali raccolti da questo Sito Web, in modo autonomo
              o tramite terze parti, ci sono: Cookie; Dati di utilizzo; email;
              nome; cognome; numero di telefono; varie tipologie di Dati; dati
              relativi al pagamento; indirizzo; ragione sociale. Dettagli
              completi su ciascuna tipologia di dati raccolti sono forniti nelle
              sezioni dedicate di questa privacy policy o mediante specifici
              testi informativi visualizzati prima della raccolta dei dati
              stessi. I Dati Personali possono essere liberamente forniti
              dall’Utente o, nel caso di Dati di Utilizzo, raccolti
              automaticamente durante l’uso di questo Sito Web. Se non
              diversamente specificato, tutti i Dati richiesti da questo Sito
              Web sono obbligatori. Se l’Utente rifiuta di comunicarli, potrebbe
              essere impossibile per questo Sito Web fornire il Servizio. Nei
              casi in cui questo Sito Web indichi alcuni Dati come facoltativi,
              gli Utenti sono liberi di astenersi dal comunicare tali Dati,
              senza che ciò abbia alcuna conseguenza sulla disponibilità del
              Servizio o sulla sua operatività. Gli Utenti che dovessero avere
              dubbi su quali Dati siano obbligatori, sono incoraggiati a
              contattare il Titolare. L’eventuale utilizzo di Cookie – o di
              altri strumenti di tracciamento – da parte di questo Sito Web o
              dei titolari dei servizi terzi utilizzati da questo Sito Web, ove
              non diversamente precisato, ha la finalità di fornire il Servizio
              richiesto dall’Utente, oltre alle ulteriori finalità descritte nel
              presente documento e nella Cookie Policy, se disponibile. L’Utente
              si assume la responsabilità dei Dati Personali di terzi ottenuti,
              pubblicati o condivisi mediante questo Sito Web e garantisce di
              avere il diritto di comunicarli o diffonderli, liberando il
              Titolare da qualsiasi responsabilità verso terzi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default policy;
