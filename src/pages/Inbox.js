import React from "react";
import { ScrollView } from "react-native";
import InboxMessage from "../components/InboxMessage/InboxMessage";

function Inbox() {
  return (
    <ScrollView>
      <InboxMessage
        unread={true}
        title="Título de Mensagem não Lida"
        body="Aqui vai mostrar apenas um pequeno texto da mensagem e mesmo assim vai ser um texto enorme"
      />
      <InboxMessage
        unread={true}
        title="Título de Mensagem não Lida"
        body="Aqui vai mostrar apenas um pequeno texto da mensagem e mesmo assim vai ser um texto enorme"
      />
      <InboxMessage
        unread={true}
        title="Título de Mensagem não Lida"
        body="Aqui vai mostrar apenas um pequeno texto da mensagem e mesmo assim vai ser um texto enorme"
      />
      <InboxMessage
        unread={false}
        title="Título de Mensagem Lida"
        body="Aqui vai mostrar apenas um pequeno texto da mensagem e mesmo assim vai ser um texto enorme"
      />
      <InboxMessage
        unread={false}
        title="Título de Mensagem Lida"
        body="Aqui vai mostrar apenas um pequeno texto da mensagem e mesmo assim vai ser um texto enorme"
      />
      <InboxMessage
        unread={false}
        title="Título de Mensagem Lida"
        body="Aqui vai mostrar apenas um pequeno texto da mensagem e mesmo assim vai ser um texto enorme"
      />
      <InboxMessage
        unread={false}
        title="Título de Mensagem Lida"
        body="Aqui vai mostrar apenas um pequeno texto da mensagem e mesmo assim vai ser um texto enorme"
      />
    </ScrollView>
  );
}

export default Inbox;
