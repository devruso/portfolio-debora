export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';
export type SessionType = 'online' | 'presencial';

export interface AppointmentData {
  client_name: string;
  client_email: string;
  client_phone: string;
  preferred_date: string;
  preferred_time: string;
  session_type: SessionType;
  main_concern: string;
  status?: AppointmentStatus;
}

export class Appointment {
  client_name: string;
  client_email: string;
  client_phone: string;
  preferred_date: string;
  preferred_time: string;
  session_type: SessionType;
  main_concern: string;
  status: AppointmentStatus;

  constructor(data: AppointmentData) {
    this.client_name = data.client_name;
    this.client_email = data.client_email;
    this.client_phone = data.client_phone;
    this.preferred_date = data.preferred_date;
    this.preferred_time = data.preferred_time;
    this.session_type = data.session_type;
    this.main_concern = data.main_concern;
    this.status = data.status ?? 'pending';
  }

static async create(data: AppointmentData): Promise<Appointment> {
    // Monta a mensagem com os dados do formulário
    const message = 
      `Olá! Gostaria de agendar uma consulta.\n\n` +
      `Nome: ${data.client_name}\n` +
      `E-mail: ${data.client_email}\n` +
      `Telefone: ${data.client_phone}\n` +
      `Data preferida: ${data.preferred_date}\n` +
      `Horário preferido: ${data.preferred_time}\n` +
      `Tipo de sessão: ${data.session_type}\n` +
      `Motivo: ${data.main_concern}`;

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);

    // Número do WhatsApp (coloque o número desejado)
    const phone = '5511999999999';

    // Abre o WhatsApp Web com a mensagem preenchida
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');

    // Retorna a instância normalmente
    return new Appointment(data);
  }
}