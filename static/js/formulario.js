var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();




// Eventos
function mostrarFormulario() {
	$form.slideToggle();
	$list.slideToggle();

	return false;
}

function agregarPost() {
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();

	$list.prepend($clone)
	mostrarFormulario();
	clone.slideDown();

	$clone.fadeIn();
	return false;
}

$button.click( mostrarFormulario );
$form.on( 'submit', agregarPost );