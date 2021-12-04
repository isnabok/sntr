<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset ('img/ico/favicon.svg') }}" />
    <link rel="stylesheet" href="{{ mix('css/all.css') }}">
</head>
<body>
    @section('header')
        @include('layouts.parts._header')
    @show
    <script src="{{ mix('js/all.js') }}"></script>
</body>
</html>