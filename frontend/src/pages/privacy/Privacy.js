import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import './privacy.css'

const Privacy = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className='componentFirst'>
      <div className='componentSecond'>
        <div className='privacy'>
          <div className='privacyTitle'>Datenschutzerklärung</div>
          <div className='privacySubTitle'>Geltungsbereich</div>
          <div className='privacyText'>
            Diese Datenschutzerklärung soll die Nutzer dieser Website gemäß Bundesdatenschutzgesetz und
            Telemediengesetz über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener
            Daten durch den Websitebetreiber finanzfachkraft.ch informieren.Der Websitebetreiber nimmt Ihren
            Datenschutz sehr ernst und behandelt Ihre personenbezogenen Daten vertraulich und entsprechend der
            gesetzlichen Vorschriften.
          </div>
          <div className='privacyText'>
            Der Betreiber des Internetauftritts finanzfachkraft.ch ist Andrea Solèr, Bodenmatte 3, 6062 Wilen
            (Sarnen).
          </div>
          <div className='privacyText'>
            Bedenken Sie, dass die Datenübertragung im Internet grundsätzlich mit Sicherheitslücken bedacht sein
            kann. Ein vollumfänglicher Schutz vor dem Zugriff durch Fremde ist nicht realisierbar.
          </div>
          <div className='privacySubTitle'>Zugriffsdaten</div>
          <div className='privacyText'>
            Der Websitebetreiber bzw. Seitenprovider erhebt Daten über Zugriffe auf die Seite und speichert diese
            als „Server-Logfiles“ ab. Folgende Daten werden so protokolliert:
          </div>
          <div className='privacyText'>
            <ul className='termsListContainer'>
              <li className='termsList'>opportunity or goodwill;</li>
              <li className='termsList'>profits, anticipated savings or business;</li>
              <li className='termsList'>profits, anticipated savings or business;</li>
              <li className='termsList'>value of any equipment,</li>
            </ul>
          </div>
          <div className='privacyText'>
            Die erhobenen Daten dienen lediglich statistischen Auswertungen und zur Verbesserung der Website. Der
            Websitebetreiber behält sich allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten
            konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
          </div>
          <div className='privacySubTitle'>SSL-Verschlüsselung</div>
          <div className='privacyText'>
            Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie
            zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine
            verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf
            „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </div>
          <div className='privacyText'>
            Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von
            Dritten mitgelesen werden.
          </div>
          <div className='privacySubTitle'>Cookies</div>
          <div className='privacyText'>
            Diese Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, welche auf Ihrem Endgerät
            gespeichert werden. Ihr Browser greift auf diese Dateien zu. Durch den Einsatz von Cookies erhöht sich
            die Benutzerfreundlichkeit und Sicherheit dieser Website.
          </div>
          <div className='privacyText'>
            Gängige Browser bieten die Einstellungsoption, Cookies nicht zuzulassen. Hinweis: Es ist nicht
            gewährleistet, dass Sie auf alle Funktionen dieser Website ohne Einschränkungen zugreifen können, wenn
            Sie entsprechende Einstellungen vornehmen.
          </div>
          <div className='privacySubTitle'>Umgang mit personenbezogenen Daten</div>
          <div className='privacyText'>
            Der Websitebetreiber erhebt, nutzt und gibt Ihre personenbezogenen Daten nur dann weiter, wenn dies im
            gesetzlichen Rahmen erlaubt ist oder Sie in die Datenerhebung einwilligen.
          </div>
          <div className='privacyText'>
            Als personenbezogene Daten gelten sämtliche Informationen, welche dazu dienen, Ihre Person zu bestimmen
            und welche zu Ihnen zurückverfolgt werden können – also beispielsweise Ihr Name, Ihre E-Mail-Adresse
            und Telefonnummer.
          </div>
          <div className='privacySubTitle'>Umgang mit Kontaktdaten</div>
          <div className='privacyText'>
            Nehmen Sie mit dem Websitebetreiber durch die angebotenen Kontaktmöglichkeiten Verbindung auf, werden
            Ihre Angaben gespeichert, damit auf diese zur Bearbeitung und Beantwortung Ihrer Anfrage
            zurückgegriffen werden kann. Ohne Ihre Einwilligung werden diese Daten nicht an Dritte weitergegeben.
          </div>
          <div className='privacySubTitle'>Umgang mit Kommentaren und Beiträgen</div>
          <div className='privacyText'>
            Hinterlassen Sie auf dieser Website einen Beitrag oder Kommentar, wird Ihre IP-Adresse gespeichert.
            Dies dient der Sicherheit des Websitebetreibers: Verstößt Ihr Text gegen das Recht, möchte er Ihre
            Identität nachverfolgen können.
          </div>
          <div className='privacySubTitle'>Abonnements</div>
          <div className='privacyText'>
            Sie haben die Möglichkeit, sowohl die gesamte Website als auch Nachfolgekommentare auf Ihren Beitrag zu
            abonnieren. Sie erhalten eine E-Mail zur Bestätigung Ihrer E-Mail-Adresse. Neben dieser werden keine
            weiteren Daten erhoben. Die gespeicherten Daten werden nicht an Dritte weitergereicht. Sie können ein
            Abonnement jederzeit abbestellen.
          </div>
          <div className='privacySubTitle'>Google Analytics</div>
          <div className='privacyText'>
            Diese Website nutzt den Dienst „Google Analytics“, welcher von der Google Inc. (1600 Amphitheatre
            Parkway Mountain View, CA 94043, USA) angeboten wird, zur Analyse der Websitebenutzung durch Nutzer.
            Der Dienst verwendet „Cookies“ – Textdateien, welche auf Ihrem Endgerät gespeichert werden. Die durch
            die Cookies gesammelten Informationen werden im Regelfall an einen Google-Server in den USA gesandt und
            dort gespeichert.
          </div>
          <div className='privacyText'>
            Auf dieser Website greift die IP-Anonymisierung. Die IP-Adresse der Nutzer wird innerhalb der
            Mitgliedsstaaten der EU und des Europäischen Wirtschaftsraum gekürzt. Durch diese Kürzung entfällt der
            Personenbezug Ihrer IP-Adresse. Im Rahmen der Vereinbarung zur Auftragsdatenvereinbarung, welche die
            Websitebetreiber mit der Google Inc. geschlossen haben, erstellt diese mithilfe der gesammelten
            Informationen eine Auswertung der Websitenutzung und der Websiteaktivität und erbringt mit der
            Internetnutzung verbundene Dienstleistungen.
          </div>
          <div className='privacyText'>
            Sie haben die Möglichkeit, die Speicherung des Cookies auf Ihrem Gerät zu verhindern, indem Sie in
            Ihrem Browser entsprechende Einstellungen vornehmen. Es ist nicht gewährleistet, dass Sie auf alle
            Funktionen dieser Website ohne Einschränkungen zugreifen können, wenn Ihr Browser keine Cookies
            zulässt.
          </div>
          <div className='privacyText'>
            Weiterhin können Sie durch ein Browser-Plugin verhindern, dass die durch Cookies gesammelten
            Informationen (inklusive Ihrer IP-Adresse) an die Google Inc. gesendet und von der Google Inc. genutzt
            werden. Folgender Link führt Sie zu dem entsprechenden Plugin:
            https://tools.google.com/dlpage/gaoptout?hl=de
          </div>
          <div className='privacyText'>
            Alternativ verhindern Sie mit einem Klick auf diesen Link, dass Google Analytics innerhalb dieser
            Website Daten über Sie erfasst. Mit dem Klick auf obigen Link laden Sie ein „Opt-Out-Cookie“ herunter.
            Ihr Browser muss die Speicherung von Cookies also hierzu grundsätzlich erlauben. Löschen Sie Ihre
            Cookies regelmäßig, ist ein erneuter Klick auf den Link bei jedem Besuch dieser Website vonnöten.
          </div>
          <div className='privacyText'>
            Hier finden Sie weitere Informationen zur Datennutzung durch die Google Inc.:
            <a href='https://support.google.com/analytics/answer/6004245?hl=de'>
              https://support.google.com/analytics/answer/6004245?hl=de
            </a>
          </div>
          <div className='privacySubTitle'>Facebook Remarketing/Facebook-Pixel</div>
          <div className='privacyText'>
            Diese Website nutzt den Dienst „Facebook-Pixel“ des sozialen Netzwerkes Facebook, welches von der
            Facebook Inc., 1 Hacker Way, Menlo Park, CA 94025, USA, bzw. falls Sie in der EU ansässig sind,
            Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland betrieben wird
            („Facebook“).
          </div>
          <div className='privacyText'>
            Der Facebook-Pixel wird beim Aufruf unserer Webseiten unmittelbar durch Facebook eingebunden und können
            auf Ihrem Gerät ein sog. Cookie, d.h. eine kleine Datei abspeichern. Wenn Sie sich anschließend bei
            Facebook einloggen oder im eingeloggten Zustand Facebook besuchen, wird der Besuch unseres Angebotes in
            Ihrem Profil vermerkt. Die über Sie erhobenen Daten sind für uns anonym, bieten uns also keine
            Rückschlüsse auf die Identität der Nutzer. Allerdings werden die Daten von Facebook gespeichert und
            verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist. Die Verarbeitung der Daten
            durch Facebook erfolgt im Rahmen von Facebooks Datenverwendungsrichtlinie. Dementsprechend erhalten Sie
            weitere Informationen zur Funktionsweise des Remarketing-Pixels und generell zur Darstellung von
            Facebook-Ads, in der Datenverwendungsrichtlinie von Facebook:
            <a href='https://www.facebook.com/policy.php.'>https://www.facebook.com/policy.php.</a>
          </div>
          <div className='privacyText'>
            Rechtsgrundlage für die Verarbeitung der personenbezogenen Daten der Nutzer ist Art. 6 Abs. 1 lit. f
            DSGVO.
          </div>
          <div className='privacyText'>
            Mit Hilfe des Facebook-Pixels ist es Facebook möglich, die Besucher unseres Angebotes als Zielgruppe
            für die Darstellung von Anzeigen, sog. „Facebook-Ads“ zu bestimmen. Dementsprechend setzen wir das
            Facebook -Pixel ein, um die durch uns geschalteten Facebook-Ads nur solchen Facebook-Nutzern
            anzuzeigen, die auch ein Interesse an unserem Internetangebot gezeigt haben. Das heißt, mit Hilfe des
            Facebook -Pixels möchten wir sicherstellen, dass unsere Facebook-Ads dem potentiellen Interesse der
            Nutzer entsprechen und nicht belästigend wirken. Mit Hilfe des Facebook-Pixels können wir ferner die
            Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke nachvollziehen, in
            dem wir sehen ob Nutzer nachdem Klick auf eine Facebook-Werbeanzeige auf unsere Website weitergeleitet
            wurden.
          </div>
          <div className='privacyText'>
            Sie können der Erfassung durch den Facebook-Pixel und Verwendung Ihrer Daten zur Darstellung von
            Facebook-Ads widersprechen. Hierzu können Sie die von Facebook eingerichtete Seite aufrufen und dort
            die Hinweise zu den Einstellungen nutzungsbasierter Werbung befolgen:
            <a href='https://www.facebook.com/settings?tab=ads'>https://www.facebook.com/settings?tab=ads</a>
            oder den Widerspruch über die US-amerikanische Seite
            <a href='http://www.aboutads.info/choices/'>http://www.aboutads.info/choices/</a> oder die EU-Seite{' '}
            <a href='http://www.youronlinechoices.com/'>http://www.youronlinechoices.com/</a> erklären. Die
            Einstellungen erfolgen plattformunabhängig, d.h. sie werden für alle Geräte, wie Desktopcomputer oder
            mobile Geräte übernommen
          </div>
          <div className='privacySubTitle'>Nutzung von Social-Media-Plugins</div>
          <div className='privacyText'>
            Diese Website verwendet Facebook Social Plugins, welches von der Facebook Inc. (1 Hacker Way, Menlo
            Park, California 94025, USA) betrieben wird. Erkennbar sind die Einbindungen an dem Facebook-Logo bzw.
            an den Begriffen „Like“, „Gefällt mir“, „Teilen“ in den Farben Facebooks (Blau und Weiß). Informationen
            zu allen Facebook-Plugins finden Sie im folgenden Link:
            <a href='https://developers.facebook.com/docs/plugins/'>
              https://developers.facebook.com/docs/plugins/
            </a>
          </div>
          <div className='privacyText'>
            Das Plugin stellt eine direkte Verbindung zwischen Ihrem Browser und den Facebook-Servern her. Der
            Websitebetreiber hat keinerlei Einfluss auf die Natur und den Umfang der Daten, welche das Plugin an
            die Server der Facebook Inc. übermittelt. Informationen dazu finden Sie hier:
            <a href=' https://www.facebook.com/help/186325668085084'>
              https://www.facebook.com/help/186325668085084
            </a>
          </div>
          <div className='privacyText'>
            Das Plugin informiert die Facebook Inc. darüber, dass Sie Nutzer diese Website besucht hat. Es besteht
            hierbei die Möglichkeit, dass Ihre IP-Adresse gespeichert wird. Sind Sie während des Besuchs auf dieser
            Website in Ihrem Facebook-Konto eingeloggt, werden die genannten Informationen mit diesem verknüpft.
          </div>
          <div className='privacyText'>
            Nutzen Sie die Funktionen des Plugins – etwa indem Sie einen Beitrag teilen oder „liken“ – werden die
            entsprechenden Informationen ebenfalls an die Facebook Inc. übermittelt.
          </div>
          <div className='privacyText'>
            Möchten Sie verhindern, dass die Facebook. Inc. diese Daten mit Ihrem Facebook-Konto verknüpft, loggen
            Sie sich bitte vor dem Besuch dieser Website bei Facebook aus.
          </div>
          <div className='privacyText'>
            Weiterhin nutzt diese Website die „+1“-Schaltfläche von Google Plus. Betrieben wird diese von der
            Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA). Besuchen Sie eine Seite, welche
            die „+1“-Schaltfläche enthält, entsteht eine direkte Verbindung zwischen Ihrem Browser und den
            Google-Servern. Der Websitebetreiber hat daher keinerlei Einfluss auf die Natur und den Umfang der
            Daten, welche das Plugin an die Server der Google Inc. übermitteln. Klicken Sie auf den „+1“-Button,
            während Sie in Google + angemeldet sind, teilen Sie die Inhalte der Seite auf Ihrem öffentlichen
            Profil.
          </div>
          <div className='privacyText'>
            Personenbezogene Daten werden laut der Google Inc. erst dann erhoben, wenn Sie auf die Schaltfläche
            klicken. Auch bei eingeloggten Google-Nutzern wird unter anderem die IP-Adresse gespeichert. Möchten
            Sie verhindern, dass die Google Inc. diese Daten speichert und mit Ihrem Konto verknüpft, loggen Sie
            sich bitte vor dem Besuch dieser Website aus.
          </div>
          <div className='privacyText'>
            Informationen zur „+1“-Schaltfläche finden Sie hier:
            <a href='https://developers.google.com/+/web/buttons-policy'>
              https://developers.google.com/+/web/buttons-policy
            </a>
          </div>
          <div className='privacyText'>
            Weiterhin nutzt diese Website Twitter-Schlatflächen. Betrieben werden diese von der Twitter Inc. (795
            Folsom St., Suite 600, San Francisco, CA 94107, USA). Besuchen Sie eine Seite, welche eine solche
            Schaltfläche enthält, entsteht eine direkte Verbindung zwischen Ihrem Browser und den Twitter-Servern.
            Der Websitebetreiber hat daher keinerlei Einfluss über die Natur und den Umfang der Daten, welche das
            Plugin an die Server Twitter Inc. übermittelt.
          </div>
          <div className='privacyText'>
            Gemäß der Twitter Inc. wird dabei allein Ihre IP-Adresse erhoben und gespeichert.
          </div>
          <div className='privacyText'>
            Informationen zu dem Umgang mit personenbezogenen Daten durch die Twitter Inc. finden Sie hier:{' '}
            <a href='https://twitter.com/privacy?lang=de'>https://twitter.com/privacy?lang=de</a>
          </div>
          <div className='privacySubTitle'>Newsletter-Abonnement</div>
          <div className='privacyText'>
            Der Websitebetreiber bietet Ihnen einen Newsletter an, in welchem er Sie über aktuelle Geschehnisse und
            Angebote informiert. Möchten Sie den Newsletter abonnieren, müssen Sie eine valide E-Mail-Adresse
            angeben.
          </div>
          <div className='privacySubTitle'>Rechte des Nutzers: Auskunft, Berichtigung und Löschung</div>
          <div className='privacyText'>
            Sie als Nutzer erhalten auf Antrag Ihrerseits kostenlose Auskunft darüber, welche personenbezogenen
            Daten über Sie gespeichert wurden. Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur
            Aufbewahrung von Daten (z. B. Vorratsdatenspeicherung) kollidiert, haben Sie ein Anrecht auf
            Berichtigung falscher Daten und auf die Sperrung oder Löschung Ihrer personenbezogenen Daten.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
