document.addEventListener('deviceready', function () {
    // Vue
    new Vue({
        el: '#appVue',
        data: {
            nome: 'gabs'
        },
        created() {
            //alert('oi')
        },
        methods: {
            compartilhar() {
                var imageUrl = 'https://www.gstatic.com/webp/gallery/2.jpg';
                window.plugins.socialsharing.share(
                    null,             // Mensagem (ou null se não precisar)
                    null,             // Assunto (ou null se não precisar)
                    imageUrl,         // URL da imagem
                    null,             // URL do link (ou null se não precisar)
                    function (success) {
                        alert('Compartilhado com sucesso!');
                    },
                    function (error) {
                        alert('Erro ao compartilhar: ' + error);
                    }
                );
            },
            agendar() {
                cordova.plugins.notification.local.schedule({
                    title: 'Título da Notificação',
                    text: 'Este é o texto da notificação.',
                    foreground: true,
                    trigger: { at: new Date(new Date().getTime() + 5 * 1000) }, // Notificação será exibida em 5 segundos
                    icon: 'res://ico'
                });
        
                alert('Notificação agendada para 5 segundos a partir de agora.');
            }
        }
    });

}, false);

